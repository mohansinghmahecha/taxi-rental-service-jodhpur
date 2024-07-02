import img404 from "../../assets/404.jpg";
export default function NotFound() {
  return (
    <div className="w-full block relative flex justify-center">
      <img src={img404} alt={img404} width={512} height={700}/>
    </div>
  );
}
