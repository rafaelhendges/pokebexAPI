//Import
import React, { useEffect, useState } from "react";
import { Pokemon } from "../model/pokemon";
import { fetchPokemonList } from "../service/PokemonService";

//declaração dos tipos

interface PokemonListProps {
    onSelect: (url: string) => void
}


const PokemonList: React.FC<PokemonListProps> = ({onSelect}) => {

    //criação das props
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    //criação de métodos se houver
    //função para buscar a definir a lista de Pokémons
    useEffect(()=>{
        const getPokemons = async () =>{
            const result = await fetchPokemonList();
            setPokemons(result);
        };      
        getPokemons();
    }, []);

    //retorno do componente
    return(
        <div>
           <h1>Pokemon List</h1>
            <ul>
                <li>Teste</li>
            </ul>
        </div>
    );
}


//export
export default Pokemon