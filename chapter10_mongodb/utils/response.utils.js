const responseOK = (res, errorCode = 200, message = null, data = null) => {
    return res
        .status(200)
        .json(responseObj(errorCode, message, data))
}

const responseError = (res, errorCode = 400, message = null, data = null) => {
    return res
        .status(errorCode)
        .json(responseObj(errorCode, message, data))
}

const responseObj = (errorCode, message, data) => {
    return {
        errorCode,
        message,
        data
    }
}

module.exports = { responseOK, responseError }