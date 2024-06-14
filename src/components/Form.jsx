import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Button from "./Button";
import { useForm } from "react-hook-form";

function Form() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(100);

  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  function submit({ name, phone, amount, email }) {
    console.log(name, phone, amount, email);
    reset();
  }
  return (
    <section className="container mx-auto my-[6rem]">
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        <div className="form-image background-image:url(./image4.png) block h-[30rem] w-full md:h-full"></div>

        <form
          onSubmit={handleSubmit(submit)}
          className="text-syne mx-2 flex flex-col gap-4 text-lg md:mx-6 md:text-xl"
        >
          {/*  */}
          <label className="" htmlFor="name">
            Name*
          </label>
          <input
            id="name"
            type="text"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            placeholder="Enter your full name"
            required
            {...register("name", { required: "this field is required" })}
          />
          <label htmlFor="name" className="text-red-600">
            {errors?.name?.message}
          </label>

          <label className="" htmlFor="phone">
            Phone*
          </label>
          <PhoneInput
            id="phone"
            placeholder="Enter your phone number"
            required
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            defaultCountry="in"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            {...register("phone", {
              required: "this field is required",
            })}
          />
          <label htmlFor="phone" className="text-red-600">
            {errors?.phone?.message}
          </label>

          <label htmlFor="email">Email ID*</label>
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            {...register("email", { required: "this field is required" })}
            required
          />
          <label htmlFor="email" className="text-red-600">
            {errors?.email?.message}
          </label>

          <label htmlFor="amount">Amount*</label>
          <input
            id="amount"
            defaultValue={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="Number"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            {...register("amount", {
              required: "this field required",
              validate: (value) =>
                value >= 100 || "Donate atleast 100 to help society",
            })}
            required
          />
          <label htmlFor="amount" className="text-red-600">
            {errors?.amount?.message}
          </label>

          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            placeholder="Type your message..."
            rows="4"
            cols="50"
            type="text"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
          />

          <Button />
        </form>
      </div>
    </section>
  );
}

export default Form;
