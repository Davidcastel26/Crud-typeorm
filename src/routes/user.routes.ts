import { Router } from 'express';

import { getAllUsers,
    createUser,
    updateUser,
    deleteUser, 
    getUser} from '../controllers/user.controller';

const router = Router();

router.get('/users', getAllUsers)

router.post('/users', createUser)

router.get('/users/:id', getUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

export default router;