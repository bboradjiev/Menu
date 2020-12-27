import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))];
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoties, setCategories] =useState(allCategories);

  const filterCategories = (category) => {
    if (category === 'all'){
      return setMenuItems(items)
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'/>
            <div className='btn-container'>{categoties.map(category => <Categories category={category} filterCategories={filterCategories}/> )}</div>
            {menuItems.map(item => <Menu key={item.id} item={item}/>)}
          </div>
      </section>
    </main>
  );
}

export default App;
