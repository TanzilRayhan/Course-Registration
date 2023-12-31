/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selected, totalCredits, remaining, totalPrice }) => {
  console.log(selected);

  return (
    <div className="">
      <h1 className="text-xl lg:text-2xl font-bold mb-5 text-blue-600">
        Credit Hour Remaining: {remaining} hr
      </h1>
      <h3 className="text-xl font-semibold my-3">
        Course Taken: {selected.length}
      </h3>
      <hr />
      <div>
        <h1 className="text-2xl font-bold my-5">Course Name</h1>

        <ul className="list-decimal pl-5">
          {selected.map((courses) => (
            <li key={courses.id}>{courses.courseTitle}</li>
          ))}
        </ul>
      </div>
      <hr />
      <h3 className="text-lg font-semibold my-3">
        Total Credit Hour: {totalCredits} hr
      </h3>
      <hr />
      <h3 className="text-lg font-semibold my-3">
        Total Price : BDT {totalPrice}
      </h3>
    </div>
  );
};

export default Cart;
