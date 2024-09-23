import { useState } from 'react';
import {useConnection, useWallet} from "@solana/wallet-adapter-react"

export function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();
    const [amount , setAmount] = useState(0);

    async function sendAirdropToUser(){
        let sol = amount * 1000000000;
        await connection.requestAirdrop(wallet.publicKey, sol);
        alert(`Airdropped ${amount} sol`);
        
    }

    return <div>
        
        <input type="text" placeholder="Amount" onChange={(e)=> setAmount(e.target.value)}/>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
        
        

    </div>

}
