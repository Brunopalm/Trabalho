module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const student = { ...req.body }
        if(req.params.id) student.id = req.params.id
            try {
                existsOrError(student.imageUrl, 'Imagem não informado')
                existsOrError(student.description, 'Descrição não informado')                                
            } catch(msg) {
                res.status(400).send(msg)
            }     
        if(student.id) {
            app.db('students')
                .update(student)
                .where({ id: student.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('students')
                .insert(student)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('students')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Discentes não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }


    return { save, remove }
}