import {createRouter, createWebHistory} from 'vue-router'

import Read from './components/Read'
import Create from './components/Create'
import Update from './components/Update'


const routes = [
    {
        path: '/',
        name: 'read',
        component: Read
    },
    {
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/update/:id',
        name: 'update',
        component: Update
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router