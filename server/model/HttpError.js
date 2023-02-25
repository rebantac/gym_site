class HttpError extends Error{
    constructor(emessage,ecode)
    {
        super(emessage)
        this.code = ecode
    }
}
module.exports = HttpError