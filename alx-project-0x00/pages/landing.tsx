import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-4 bg-amber-50">
      <h1 className="text-black font-bold">This is the landing page</h1>
      <Card />
      <div className="flex gap-2 mt-2">
        <Button
          title="First Button"
          styles="bg-red-600 p-2 cursor-pointer rounded-sm"
        />
        <Button
          title="Second Button"
          styles="bg-blue-600 p-2 cursor-pointer rounded-md"
        />
        <Button
          title="Third Button"
          styles="bg-green-600 p-2 cursor-pointer rounded-full"
        />
        <Button
          title="Fourth Button"
          styles="bg-green-600 p-2 cursor-pointer rounded-lg"
        />
      </div>
    </div>
  );
};
export default Landing;
