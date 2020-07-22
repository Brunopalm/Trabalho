module.exports = app => {
    
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    app.route('/peoples')
        .get(app.api.peoples.get)
        .post(app.api.peoples.save)

    app.route('/production')
        .get(app.api.productions.get)
        .post(app.api.productions.save)

    app.route('/production/inproduction')
        .get(app.api.productions.get)
        .post(app.api.productions.save)

    app.route('/peoples/:id')
        .get(app.api.peoples.getById)
        .delete(app.api.peoples.remove)

    app.route('/people/Discentes')
        .get(app.api.peoples.getByStudents)    
        .post(app.api.peoples_students.save)
        .delete(app.api.peoples_students.remove)    

    app.route('/people/Professores')
        .get(app.api.peoples.getByTeachers)    
        .post(app.api.peoples_teachers.save)
        .delete(app.api.peoples_teachers.remove)   

    app.route('/people/admin')
        .get(app.api.peoples.getByAdmin)    

    app.route('/documents')
        .get(app.api.documents.get)    
        .post(app.api.documents.save)    

    app.route('/documents/:id')
        .get(app.api.documents.getById)    
        .delete(app.api.documents.remove)

    app.route('/users')
        // .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        // .all(app.config.passport.authenticate())
        .put(app.api.user.save)
}
// .get(app.api.user.getById)
