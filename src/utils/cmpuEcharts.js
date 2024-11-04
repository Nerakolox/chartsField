function formatDimensionValue(dimension, value) {
    if (dimension.toLowerCase().includes('year')) {
        return value.toString();
    }
    if (dimension.toLowerCase().includes('month')) {
        if (typeof value === 'string' && /^\d{4}-\d{2}$/.test(value)) {
            return value;
        } else if (!isNaN(value)) {
            return value.toString().padStart(2, '0');
        }
    }
    return value;
}

function determineChartType(rawData) {
    let dimensions = rawData.fields.filter(field => field.groupType === 'd');
    let metrics = rawData.fields.filter(field => field.groupType === 'q');

    if (dimensions.length === 1) {
        let dimensionType = dimensions[0].type;
        if (['DATE', 'YEAR'].includes(dimensionType) || (dimensionType === 'VARCHAR' && (dimensions[0].dataeaseName.toLowerCase().includes('year') || dimensions[0].dataeaseName.toLowerCase().includes('month')))) {
            return 'line';
        }
        if (dimensionType === 'VARCHAR') {
            return 'bar';
        }
    }

    if (dimensions.length > 1) {
        let allTimeDimensions = dimensions.every(dim => ['DATE', 'YEAR'].includes(dim.type) || (dim.type === 'VARCHAR' && (dim.dataeaseName.toLowerCase().includes('year') || dim.dataeaseName.toLowerCase().includes('month'))));
        if (allTimeDimensions) {
            return 'line';
        }
        return 'table';
    }

    return 'table';
}

export function renderChart(rawData) {
    // d-维度 q-指标
    let chartType = determineChartType(rawData)

    const nameFieldNames = rawData.fields.filter(field => field.groupType === 'd').map(field => field.dataeaseName)
    const nameFields = rawData.fields.filter(field => field.groupType === 'd').map(field => ({
        value:field.dataeaseName,
        label: field.name,
        type: field.type
    }))

    const valueFieldNames = rawData.fields.filter(field => field.groupType === 'q').map(field => field.dataeaseName)
    const valueFields = rawData.fields.filter(field => field.groupType === 'q').map(field => ({
        value:field.dataeaseName,
        label: field.name,
        type: field.type
    }))

    const data = {
        fields:{
            nameFields,valueFields
        },
        fieldNames:{
            nameFieldNames,valueFieldNames
        },
        chartType
    }
    return data
}
