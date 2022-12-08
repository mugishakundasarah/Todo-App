    module.exports.getTodoAll = async(id) => {
        let users = await User.findOne({_id: id});
        let db = users?.todo
        if (users !== null) {
            return db
        } else {
            return false
        }
    }

    module.exports.createTodo = async(id, title, dates) => {
        const time = moment(Date.now()).format('DD/MM HH:mm:ss')
        let users = await User.findOne({_id: id});
        if(!users) return false;
        let todos = users?.todo;
        let obj = {_id: new ObjectID(), title: title, dueDate: dates, time: time}
        todos.push(obj);
        return await User.updateOne({_id: id}, {todo: todos}, {new: true})
        .then(update=> {
            return true;
        })
        .catch(e=> {
            return false;
        });
    }

    module.exports.deleteTodo = async(id, idTodo) => {
        let users = await User.findOne({_id: id})
        let arr = users?.todo
        arr = arr.filter(item => item._id != idTodo)
        const response = await User.updateOne({_id: id}, { todo: arr });
        if(!response) return {success: false}
        return {success: true};
    }
    
    module.exports.editTodo = async(id, idTodo, title, dates)=>{
        let users = await User.findOne({_id: id});
        if(!users) return false;
        let arr = users?.todo;
        const a = [{_id: "a"}];
        let index = arr.findIndex(x => String(x._id) == String(idTodo));
        arr[index].title = title
        arr[index].dueDate = dates
        return User.findOneAndUpdate({_id: id}, { $set: {todo: arr} }, {new: true})
        .then(updated=> (true))
        .catch(e=> (false));
    }