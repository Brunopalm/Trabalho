module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const teacher = { ...req.body }
        if(req.params.id) teacher.id = req.params.id
            try {
                existsOrError(teacher.imageUrl, 'Imagem não informado')
                existsOrError(teacher.description, 'Descrição não informado')                                
            } catch(msg) {
                res.status(400).send(msg)
            }     
        if(teacher.id) {
            app.db('teachers')
                .update(teacher)
                .where({ id: teacher.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('teachers')
                .insert(teacher)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('teachers')
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