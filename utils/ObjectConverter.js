/**
 * I will have the logic to transform the object
 */

const { DailyEntryList } = require("../controller/DailyEntryListController");

 exports.userResponse = (users) => {
    usersResponse = [];

    users.forEach(user => {
        usersResponse.push({
            name: user.name,
            userId: user.userId,
            email: user.email,
            password : user.password,
        });
    })

    return usersResponse
}

exports.ProductResponse = (client) => {
    return {
        productName: product.productName,
        unit: product.unit,
        brokerage: product.brokerage,
        brandName: product.brandName,
        description: product.description,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
    }
}

exports.CompanyResponse = (company) => {
    companyResult = [];
    company.forEach(company => {
        companyResult.push({
            companyName: company.companyName,
            companyAddress: company.companyAddress,
            companyType: company.companyType,
            brokerage: company.status,
            reporter: company.reporter,
            assignee: company.assignee,
            id: client._id,
            createdAt: client.createdAt,
            updatedAt: client.updatedAt
        })
    })
    return clientResult;
}

exports.DailyEntryListResponse = (DailyEntryList) => {
    return {
        supplierName: DailyEntryList.supplierName,
        clientName: DailyEntryList.clientName,
        brand: DailyEntryList.brand,
        unit: DailyEntryList.unit,
        quantity: DailyEntryList.quantity,
        rate: DailyEntryList.rate,
        brokerage : DailyEntryList.brokerage,
        createdAt: DailyEntryList.createdAt,
        updatedAt: DailyEntryList.updatedAt
    }
}
