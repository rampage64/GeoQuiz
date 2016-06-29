 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
	
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }, 
	
    onDeviceReady: function() {
       
		var db = openDatabase('quiz.db', '1.0','quiz',10*1024*1024);
		db.transaction(function (tx){
		tx.executeSql('DROP TABLE IF EXISTS shtetet');
		tx.executeSql('DROP TABLE IF EXISTS qytetet');
		tx.executeSql('DROP TABLE IF EXISTS shtetetqytetet');
		alert("dropped table");
		},
		function (tx, error) {
		// error
		alert('0.Something went wrong: '+ error.message);
		}); 
		
		
		var db = openDatabase('quiz.db', '1.0','quiz',10*1024*1024);
		db.transaction(function (tx) {       
		tx.executeSql('CREATE TABLE IF NOT EXISTS shtetet (id unique, text)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS qytetet (id unique, text, shtetiId)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS shtetetqytetet (shtetiId , QytetiId)');
		 
		tx.executeSql('INSERT INTO shtetet (id, text) VALUES (1, "Kosovo")');
		tx.executeSql('INSERT INTO shtetet (id, text) VALUES (2, "Germany")');
		tx.executeSql('INSERT INTO shtetet (id, text) VALUES (3, "England")');
		tx.executeSql('INSERT INTO shtetet (id, text) VALUES (4, "Polen")');
		
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (1, "Gjilan", 1)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (2, "Prishtine", 1)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (3, "Prizren", 1)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (4, "Gjakove", 1)');
		
		
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (1, "Wiesbaden", 2)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (2, "Koln", 2)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (3, "Berlin", 2)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (4, "Freiburg", 2)');
		 
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (1, "London", 3)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (2, "Wales", 3)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (3, "Scottland", 3)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (4, "Birmingham", 3)');
		 
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (1, "Warsaw", 4)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (2, "Polen2", 4)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (3, "Polen3", 4)');
		tx.executeSql('INSERT INTO qytetet (id, text, shtetiId) VALUES (4, "Polen4", 4)');
		 
		tx.executeSql('INSERT INTO shtetetqytetet (shtetiId, QytetiId) VALUES (1, 2)');
		
		alert("DB success");  
		},
		function (tx, error) {
			// error
			alert('1.Something went wrong: '+ error.message);
		});
		 
		 var shtetiId = 0;
		 
		var db = openDatabase('quiz.db', '1.0','quiz',10*1024*1024);
		db.transaction(function (tx) {
		shtetiId = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
		tx.executeSql('SELECT * FROM SHTETET',[], 
		function (tx, results) {
			var rows = results.rows; 
			for (var index = 0; index < rows.length; index++) {
				var x = rows.item(index); 
				$('#pyt1').text(x.text);
			} 
			alert('nr shteteve: ' + rows.length + ', ShtetiId =' + shtetiId);
		},
		function (tx, error) {
		// error
		alert('2. Pytjet: '+ error.message);
		});
		});
		
		
		var db = openDatabase('quiz', '1.0','quiz',10*1024*1024);
		db.transaction(function (tx) { 
		tx.executeSql('SELECT * FROM QYTETET',[], function (tx, results) {
			var rows = results.rows;  
			var nr=4;
			for (var index = 0; index < rows.length; index++) {
				
			var randomnumber = Math.floor(Math.random() * (nr - 1 + 1)) + 1;
			nr--;
			var x = rows.item(index); 
			alert(rows.length);
			$('#p' + randomnumber).text(x.text);
			} 
		},
		function (tx, error) {
		// error
		alert('3. Pergjigjjet, Error: '+ error.message);
		});
		});
	
    } 
   
} 

app.initialize();
  