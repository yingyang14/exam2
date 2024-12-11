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
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label htmlFor="html">HTML</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css">CSS</label><br />
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
      <label htmlFor="javascript">JavaScript</label>
      </div>

      <div className="ml-5 mt-5">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> I have a bike</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> I have a car</label><br />
      </div>

      <br />

      <button className="ml-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Save</button>
    </form>
    </>
  );
}
