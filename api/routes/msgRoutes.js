'use strict';

module.exports = function(app){
 var messages = require('../controllers/msgController');

 app.route('/messages')

 .get(messages.list_all_messages)
 .post(messages.create_a_message);

 app.route('/messages/:msgid')

 .get(messages.read_a_message)
 .put(messages.update_a_message)
 .delete(messages.delete_a_message);
};