const SibApiV3Sdk = require('sib-api-v3-sdk')

const sendWelcomeEmail = (email, name) => {
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY

    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
        {
            'subject':'Welcome to Task App',
            'sender' : {'email':'thangnvv2010@gmail.com', 'name':'Thang Handsome'},
            'to' : [{'name': name, 'email':'thangnvv2010@gmail.com'}],
            'htmlContent' : '<html><body><h1>Welcome to the app, {{params.bodyMessage}}. Let me know how you get along with the app</h1></body></html>',
            'params' : {'bodyMessage':name}
        }
    )
}

const sendGoodByeEmail = (email, name) => {
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY

    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
        {
            'subject':'Sorry to see you go.',
            'sender' : {'email':'thangnvv2010@gmail.com', 'name':'Thang Handsome'},
            'to' : [{'name': name , 'email':'thangnvv2010@gmail.com'}],
            'htmlContent' : '<html><body><h1>Goodbye, {{params.bodyMessage}}. I hope to see you back sometime soon.</h1></body></html>',
            'params' : {'bodyMessage':name}
        }
    )
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}
