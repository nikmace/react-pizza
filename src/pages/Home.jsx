import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые"];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

    return (
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categories}
          />
          <SortPopup
            items={sortItems}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded ? items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj}/>
          )) : (
            Array(10).fill().map((_, index) => <PizzaLoadingBlock key={index}/>)
          )}
          {}
        </div>
      </div>
    );
}

export default Home;
