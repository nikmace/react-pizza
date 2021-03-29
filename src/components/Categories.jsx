import React, { useState } from 'react';

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectedItem = (index) => {
        setActiveItem(index);
    }

    return (
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectedItem(null)}>Все</li>
            {items && items.map((name, index) => (
                <li 
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => onSelectedItem(index)} 
                    key={`${name}_${index}`}
                >
                    {name}
                </li>
            ))}
        </ul>
      </div>
    );
}

export default Categories;

