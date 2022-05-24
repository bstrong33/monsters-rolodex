import Card from '../card/card';
import './card-list.css';

const CardList = ({ monsters }) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return <Card key={monster.id} monster={monster} />;
            })}
        </div>
    )
  };
  
  export default CardList;