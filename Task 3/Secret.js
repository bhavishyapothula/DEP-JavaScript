/*Question Link - http://www.codewars.com/kata/can-you-keep-a-secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/

function createSecretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(value) {
            secret = value;
        }
    };
}
