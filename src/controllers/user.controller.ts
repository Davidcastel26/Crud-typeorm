import { NextFunction, Request, Response } from "express"
import { User } from '../entities/User.entity'



export const getUser = async(
    req: Request,
    res:Response, 
    next: NextFunction
) => {

    const { id } = req.params;

    try {

        const user = await User.findOneBy({id})
        return res.status(200).json(user)
        
    } catch (error) {
        if(error instanceof Error) return res.status(500).json({msg: error.message})  
    }

}


export const deleteUser = async(
    req: Request,
    res:Response, 
    next: NextFunction
) => {

    try {
        const { id } = req.params;
        
        const result = await User.delete({id})

        if( result.affected === 0 ){
            return res.status(404).json({msg:'user not found'})
        }

        return res.sendStatus(204)

    } catch (error) {
        if(error instanceof Error) return res.status(500).json({msg: error.message})
    }

}

export const updateUser = async(
    req: Request,
    res:Response,  
    next: NextFunction
) => {

    const { id } = req.params;
    const { firstname, lastname } = req.body;

    try {

       const user = await User.findOneBy({id: id})
        // console.log(user);
        
        // const userUpdated = await User.
        if(!user) return res.status(404).json({msg:'User does not exists'})

        // user.firstname = firstname;
        // user.lastname = lastname;

        // user.save();

        await User.update({ id }, {
            firstname,
            lastname
        })

        return res.sendStatus(204)
        
    } catch (error) {
        if(error instanceof Error) return res.status(500).json({msg: error.message})
    }

}

export const getAllUsers = async(
    req: Request,
    res:Response, 
    next: NextFunction
) => {

   try {

    // throw new Error('Bad request')
    const user = await User.find()

    return res.status(200).json(user)  
    
   } catch (error) {
       if(error instanceof Error) return res.status(500).json({msg: error.message})
   }  
}

export const createUser = async (
    req: Request,
    res:Response, 
    next: NextFunction
) => {

    const {firstname, lastname} = req.body;

    try {
        //throw new Error("my error!!")
        const user = new User()
        user.firstname= firstname;
        user.lastname = lastname;
    
        await user.save();

        return res.status(202).json(user)
        
    } catch (error) {
        if(error instanceof Error) return res.status(500).json({msg: error.message})
    }
    
}
