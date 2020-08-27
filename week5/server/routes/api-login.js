module.exports = function(app){
    app.post('/api/auth', function(req, res){
        let users =  [{'id':1,'username':'bob21','birthday':'29/09/1990', 'age':13, 'email':'bob@com', 'pass':'321'}, {'id':2,'username':'steve67','birthday':'05/09/2001', 'age':68, 'email':'steve@com', 'pass':'321'},
        {'id':3,'username':'timmy09','birthday':'01/01/1980', 'age':100, 'email':'timmy@com', 'pass':'321'}]

        if(!req.body){
            return res.sendStatus(400)
        }

        var customer = {};
        customer.valid = false;
        customer.email = '';
        customer.username = '';
        customer.birthday = '';
        customer.age = 0;

        for(let i = 0; i < users.length; i++){
            if(req.body.email == users[i].email &&  req.body.pass == users[i].pass){
                customer.valid = true;
                customer.email = users[i].email;
                customer.username = users[i].username;
                customer.birthday = users[i].birthday;
                customer.age = users[i].age;
            }
        }
        res.send(customer);
    });
}