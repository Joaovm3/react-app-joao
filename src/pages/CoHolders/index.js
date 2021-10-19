import React from 'react';
import { Link } from 'react-router-dom';

export default function CoHolders() {
    return (
        <div>
            Página do Cotitular
            
            <p>  
                <Link to="/cotitulares/cadastrar"> Cadastrar Novo Cotitular </Link>
            </p>
        </div>
    )
}