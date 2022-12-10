import express from 'express';
// const stu = require('./router/student.js')
// const tea = require('./router/teacher.js');
import stu from './router/student.js'
import teacher from './router/teacher.js'

const app = express();
const port = process.env.PORT || '3001';

// load router modules
app.use('/student', stu);
app.use('/teacher', teacher);



app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})