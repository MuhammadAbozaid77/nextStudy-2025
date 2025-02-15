import { products } from "@/data/dummyData";

export default function RenderingChapterData(props) {
  console.log("props", props);

  return (
    <>
      <div className="p-5">
        <h1>renderingChapter</h1>
        <div className="my-5">
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), "data", "dummyData.json");
  // const JSONDATA = fs.readFile(filePath);
  // const data = JSON.parse(JSONDATA);
  return {
    props: {
      products: products,
    },
  };
}
