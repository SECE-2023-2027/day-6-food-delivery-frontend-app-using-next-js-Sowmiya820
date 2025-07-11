import FoodCard from './components/FoodCard';
import foods from './data/foods';

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
