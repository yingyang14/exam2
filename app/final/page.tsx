export default function Page() {
  return (
    <>
    <h1 className="text-3xl ml-5">Final Exam</h1>
    <form>
      <label htmlFor="product" className="ml-5">Product Description</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-pink-400"/>
      <br />
      <label htmlFor="flowers" className="mx-5">Choose flower you like :</label>
      <select name="flowers" id="flowers">
      <option value="Flower carnation Rose Bouquet with Light and Gift Box">Flower carnation Rose Bouquet with Light and Gift Box</option>
      <option value="Eternal Flower Rose with Transparent Acrylic Gift Box">Eternal Flower Rose with Transparent Acrylic Gift Box</option>
      <option value="Floral Rose Unicorn Delight Box">Floral Rose Unicorn Delight Box</option>
      <option value="Floral Rose Bunny Delight Box">Floral Rose Bunny Delight Box</option>
      <option value="External Flower Bucket rose Bouquet Gift Box">External Flower Bucket rose Bouquet Gift Box</option>
      <option value="The Gift Shop Gift Cards">The Gift Shop Gift Cards</option>
      </select>

      <br />

      <div className="ml-5 mt-5">
      <input type="radio" id="Need flower with box" name="choice" value="Need flower with box" />
      <label htmlFor="Need flower with box">Need flower with box</label><br />
      <input type="radio" id="Need flower without box" name="choice" value="Need flower without box" />
      <label htmlFor="Need flower without box">Need flower without box</label><br />
      <input type="radio" id="Need flower with gift cards" name="choice" value="Need flower with gift cards" />
      <label htmlFor="Need flower with gift cards">Need flower with gift cards</label>
      </div>

      <div className="ml-5 mt-5">
      <input type="checkbox" id="action1" name="action1" value="Bought before" />
      <label htmlFor="action1"> I have bought it before</label><br />
      <input type="checkbox" id="action2" name="action2" value="Nerver bought" />
      <label htmlFor="action2"> I have never bought it before</label><br />
      </div>

      <br />

      <button className="ml-10 focus:outline-none text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800" type="submit">Save</button>
    </form>
    </>
  );
}
