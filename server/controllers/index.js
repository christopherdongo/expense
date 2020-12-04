const Tracker = require('../models/index')

const getTransaction = async (req, res)=>{
       try{
          const transactions = await Tracker.find();

          const dataTransactions={
              success:true,
              count : transactions.length,
              data: transactions
          }
          return res.status(200).send(dataTransactions)
       }catch(err){
            const er ={
                success:false,
                error:'Server Error'
            }
          return res.status(500).send(er)
       }
}

const addTransaction= async (req,res)=>{
       try{
        const {text, amount} = req.body
        const data ={
            text,
            amount
        }
        const transaction = await Tracker.create(data)
        const result = {
            success:true,
            data:transaction
        }
        return res.status(200).send(result)
       }catch(err){
       if(err.name === 'ValidationError'){
          const message = Object.values(err.errors).map(val => val.message);
            const res={
                success:false,
                error:message
            }
          return res.status(400).send(res)
       }else{
            const er={
                success:false,
                error:'Server Error'
            }
           return res.status(500).send(er)
       }
    }
}

const deleteTransaction= async (req, res)=>{
    const {id} = req.params
     try{
    const transaction = await Tracker.findById(id)

    if(!transaction){
        return res.status(400).send({ success: false, error:'No Transaction found'})
    }
    await transaction.remove()
    return res.status(200).send({success: true, data:{} })
     }catch(err){
        return res.status(500).send({ success:false, error:'Server Error'})
     }    
}

const updateTransaction=async(req, res)=>{
    try{
        const {text, amount} = req.body
        const {id} = req.params
        let mount = await Tracker.findById(id);
          if(!mount){
              res.status(404).send({message: 'Not found amount'})
          }
        const updatedata={text, amount}
         
        mount = await Tracker.findByIdAndUpdate({_id:id}, updatedata,{new:true})
              res.status(200).send(mount)
    }catch(err){
        return res.status(500).send({ success:false, error:'Server Error'})
    }
}

module.exports ={
    getTransaction,
    addTransaction,
    deleteTransaction,
    updateTransaction
}