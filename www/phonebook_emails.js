var phonebook_emils= {
    listEmails: function(title, successCallback, errorCallback) {
 	cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'phonebookEmails', // mapped to our native Java class called "Calendar"
            'ListEmails', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "title": title
            }]
        ); 
     }
}

module.exports = phonebook_emils;
