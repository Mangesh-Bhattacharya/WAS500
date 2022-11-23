const httpStatus = require('http-status-codes');

exports.logErrors = (error, req, res, next) => {
    console.log('New Error log');
    console.error('There you go', error.stack);
    next(error);
};

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    // Add error message 
    var error = `Page does not exist. Error Code: "${errorCode}`;
    res.send(`${errorCode} | The page does not exist!`);
    console.log(error);
    res.render('404 Error', { error: error })
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
    console.log(error);
    res.render('404 Error page not found', { error: error })
};