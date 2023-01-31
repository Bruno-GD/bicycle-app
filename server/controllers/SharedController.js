
/**
 * 
 * @param  {...(string, any)} params the key of the params to check if they exist  
 */
function requiredParams(...params) {
    return (req, res, next) => {
        // Check if the params exist
        const missingParams = params.filter((param) => !req.body[param[0]]);

        if (missingParams.length)
            return res.status(400).json({
                error: `Missing ${missingParams.join(', ')} in request`,
            });

        return next();
    };
}

module.exports = {
    requiredParams
}