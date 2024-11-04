function isTimeDimension(field) {
    const timeKeywords = ['date', 'year', 'month']
    const fieldLower = field.dataeaseName.toLowerCase()
    return timeKeywords.some(keyword => fieldLower.includes(keyword))
}

function determineChartType(rawData) {
    let dimensions = rawData.fields.filter(field => field.groupType === 'd')
    let metrics = rawData.fields.filter(field => field.groupType === 'q')

    if (dimensions.length === 1 && isTimeDimension(dimensions[0])) {
        return dimensions[0].type === 'VARCHAR' ? 'bar' : 'line'
    }

    if (dimensions.every(dim => isTimeDimension(dim))) {
        return 'line'
    }

    return 'table'
}

export function renderChart(rawData) {
    const fields = rawData.fields.reduce((acc, field) => {
        const key = field.groupType === 'd' ? 'nameFields' : 'valueFields'
        const keyNames = field.groupType === 'd' ? 'nameFieldNames' : 'valueFieldNames'
        
        if (!acc[key]) acc[key] = []
        if (!acc[keyNames]) acc[keyNames] = []
        
        acc[key].push({
            value: field.dataeaseName,
            label: field.name,
            type: field.type
        });
        acc[keyNames].push(field.dataeaseName)
        return acc
    }, {})

    return {
        fields: {
            nameFields: fields.nameFields || [],
            valueFields: fields.valueFields || [],
        },
        fieldNames: {
            nameFieldNames: fields.nameFieldNames || [],
            valueFieldNames: fields.valueFieldNames || [],
        },
        chartType: determineChartType(rawData)
    }
}
