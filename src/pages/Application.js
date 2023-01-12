import React, { useEffect, useState } from "react";
import portrait2 from "../assets/portrait2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropzone from "../components/Dropzone";
import NumberFormat from "react-number-format";

import axios from "axios";
import LocationSearch from "../components/LocationSearch";

function Application() {
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    service_packages: [
      {
        name: "",
        service_id: "1",
        description: "",
        service_offering: "",
        marketplace_featured: true,
        price_cap_measurement_factor: "unit",
        locations: [
          {
            location_id: "",
            price: "",
            primary_location: false,
            location_name: "",
          },
        ],
      },
    ],
  };
  const [formData, setFormData] = useState(emptyForm);
  const [errorBox, setErrorBox] = useState();

  // console.log()

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [focused, setFocused] = useState(false);

  const serviceURL = process.env.REACT_APP_EVENDY_SERVICES;
  const registerURL = process.env.REACT_APP_EVENDY_VENDOR_REGISTRATION;

  const notify = () => toast.error(errMsg);
  const notifySuccess = () => toast.success(successMsg);

  const [evendyServices, setEvendyServices] = useState([]);
  const { name, email, phone } = formData;

  const handleChangeInputNew = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value >= 0 && value < 10000000000000) {
      setFormData({ ...formData, [name]: value });
      return;
    } else if (name !== "phone") {
      setFormData({ ...formData, [name]: value });
      return;
    }
  };

  // console.log(formData)

  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(serviceURL);
      setEvendyServices(response.data.data);
    };

    getServices();
  }, []);

  useEffect(() => {
    if (errMsg) {
      notify();
      setErrMsg("");
      setLoading(false);
    }
    if (successMsg) {
      notifySuccess();
      setSuccessMsg("");
      setLoading(false);
    }
    // console.log(errorBox)
  }, [errMsg, successMsg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    for (const key in formData.service_packages) {
      for (const locationKey in formData.service_packages[key].locations) {
        const price =
          formData.service_packages[key].locations[locationKey].price;
        if (price) {
          const pack = formData.service_packages;
          if (price.length > 3) {
            const finalPrice = price.replace(/,/g, "");

            const packL = formData.service_packages[key].locations;
            packL[locationKey] = {
              ...packL[locationKey],
              ["price"]: parseInt(finalPrice),
            };

            setFormData({ ...formData, service_packages: pack });
          }
        }
      }
    }

    axios
      .post(registerURL, formData)
      .then((response) => {
        setSuccessMsg(response.data.data.message);
        // console.log(response)
        setIsFormSubmitted(true);
        setFormData(emptyForm);
        setErrorBox({});
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        setErrorBox(err.response.data.errors);
        // console.log(err)
      });

    setIsFormSubmitted(false);
  };

  const handleAddFields3 = () => {
    const value = [
      ...formData.service_packages,
      {
        name: "",
        service_id: "1",
        description: "",
        service_offering: "",
        marketplace_featured: false,
        price_cap_measurement_factor: "unit",
        locations: [
          {
            location_id: "",
            price: "",
            primary_location: false,
            location_name: "",
          },
        ],
      },
    ];
    // setFormData([...inputFields3, { offering: "" }]);
    setFormData({ ...formData, service_packages: value });
    // console.log(formData)
  };

  const handleRemoveFields3 = (index) => {
    if (index !== 0) {
      const value = [...formData.service_packages];
      value.splice(index, 1);
      setFormData({ ...formData, service_packages: value });
    }
  };

  const [childData, setChildData] = useState({});

  useEffect(() => {
    const packages = formData.service_packages;
    packages.forEach((pk) => {
      pk.locations.forEach((location) => {});
    });
  }, [formData]);

  const getFile = (e) => {
    // console.log(e.target.value)
  };

  const [searchIndex, setSearchIndex] = useState("");

  const showErrorText = "mt-2 visible text-pink-600 text-xs";
  const hideErrorText = "mt-2 invisible text-pink-600 text-xs";
  const showErrorBorder =
    "border-red-500 focus:outline-none peer border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-md   w-full";
  const hideErrorBorder =
    "border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-md   w-full";

  return (
    <div className="pt-[100px] bg-gray-200 font-poppins xl:px-[50px] px-[15px] md:px-[20px]">
      <div className=" px-4 font-poppins pt-4 md:pb-16 pb-4 lg:px-36 sm:px-8 xl:px-24 2xl:px-44 mb-8 bg-white">
        <h1 className="text-2xl font-semibold flex justify-center mb-10 mt-[100px]">
          Vendor Application Form
        </h1>
        <div className="border-2 px-2 pb-8 pt-4">
          <div className="flex justify-center px-5 flex-col md:flex-row ">
            <div className="mr-2 md:w-[250px] xl:w-[500px] mt-4">
              <h4 className="text-sm font-semibold">Full Name:</h4>
              <input
                className={errorBox?.name ? showErrorBorder : hideErrorBorder}
                name="name"
                placeholder="e.g John Doe"
                type="text"
                value={name}
                onChange={handleChangeInputNew}
              />
              <p class={errorBox?.name ? showErrorText : hideErrorText}>
                {errorBox?.name ? errorBox.name[0] : ""}
              </p>
            </div>
            <div className="mr-2 md:w-[250px] xl:w-[500px] mt-4">
              <h4 className="text-sm font-semibold">Phone Number:</h4>
              <input
                className={errorBox?.phone ? showErrorBorder : hideErrorBorder}
                name="phone"
                placeholder="e.g 08123456790"
                type="number"
                value={phone}
                onChange={handleChangeInputNew}
              />
              <p class={errorBox?.phone ? showErrorText : hideErrorText}>
                {errorBox?.phone ? errorBox.phone[0] : ""}
              </p>
            </div>
            <div className="mr-2 md:w-[250px] xl:w-[500px] mt-4">
              <h4 className="text-sm font-semibold">Email:</h4>
              <input
                className={errorBox?.email ? showErrorBorder : hideErrorBorder}
                name="email"
                placeholder="e.g example@gmail.com"
                type="email"
                value={email}
                onChange={handleChangeInputNew}
              />
              <p class={errorBox?.email ? showErrorText : hideErrorText}>
                {errorBox?.email ? errorBox.email[0] : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-center px-5 flex-col md:flex-row "></div>
        </div>
        {formData.service_packages.map((data, index) => {
          const {
            name: sp_name,
            service_id,
            description,
            service_offering,
            marketplace_featured,
            price_cap_measurement_factor,
          } = data;
          const package_index = index;
          const handleChangeInputSP = (e) => {
            let { name, value } = e.target;
            const pack = formData.service_packages;
            if (value === "true") {
              value = true;
            } else if (value === "false") {
              value = false;
            }
            pack[index] = { ...pack[index], [name]: value };
            setFormData({ ...formData, service_packages: pack });
          };

          const passDataImg = (data) => {
            const pack = formData.service_packages;

            pack[index] = { ...pack[index], images: data };

            setFormData({ ...formData, service_packages: pack });
          };

          const handleAddFields = () => {
            const value = [
              ...data.locations,
              {
                location_id: "",
                price: "",
                location_name: "",
                primary_location: false,
              },
            ];
            const newPackage = formData.service_packages;
            newPackage[index].locations = value;
            setFormData({ ...formData, service_packages: newPackage });
          };

          const handleRemoveFields = (idx) => {
            if (idx !== 0) {
              const value = [...data.locations];
              value.splice(idx, 1);
              const newPackage = formData.service_packages;
              newPackage[index].locations = value;
              setFormData({ ...formData, service_packages: newPackage });
            }
          };
          return (
            <div className="">
              <div className="flex justify-between items-center mb-2  mt-8">
                <h4 className="text-lg font-semibold">Package</h4>

                <div className="flex">
                  <button
                    className="text-xs px-3 mx-2 text-white p-2 rounded font-normal bg-primary1"
                    onClick={() => handleAddFields3(index)}
                  >
                    Add new Package
                  </button>
                  <h4
                    className={`text-xs px-3 mx-2 text-white p-2 rounded font-normal bg-red-900 cursor-pointer ${
                      index === 0 ? "hidden" : "block"
                    }`}
                    onClick={() => handleRemoveFields3(index)}
                  >
                    Delete package
                  </h4>
                </div>
              </div>
              <div className="border-2 px-2 pb-8 pt-4 flex flex-col items-center justify-center">
                <div className="flex w-full justify-center px-5 flex-col md:flex-row ">
                  <div className="mr-2 md:w-[300px] xl:w-[500px] mt-4">
                    <h4 className="text-sm font-semibold">Package Name:</h4>
                    <input
                      className={
                        errorBox?.[`service_packages.${index}.name`]
                          ? showErrorBorder
                          : hideErrorBorder
                      }
                      name="name"
                      placeholder="eg Conference Package or Wedding Package..."
                      value={sp_name}
                      onChange={handleChangeInputSP}
                    />
                    {/* <p class={errorBox?.["service_packages.0.name"]? showErrorText  : hideErrorText}>
                    {errorBox?.["service_packages.0.name"]? errorBox?.["service_packages.0.name"][0] : ""}
                   </p> */}
                    <h4 className="text-xs font-light mt-1">
                      Create a package name for your service
                    </h4>
                  </div>
                  <div className="mr-2 md:w-[300px] xl:w-[500px] flex flex-col md:flex-row mt-4">
                    <div className="flex flex-col items-start flex-1 mx-0 md:mx-2 ">
                      <label for="service_id" className="text-sm font-semibold">
                        Service:
                      </label>

                      <select
                        className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-2 rounded-md   w-full"
                        name="service_id"
                        value={service_id}
                        onChange={handleChangeInputSP}
                      >
                        {evendyServices.map((service, index) => (
                          <option key={`service-${index}`} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      <h4 className="text-xs font-light mt-1">
                        What type of service do you off under this package?
                      </h4>
                    </div>
                    <div className="mr-2 flex-1 mx-0 md:mx-2 ">
                      <h4 className="text-sm md:text-[0.75rem] font-semibold  md:mt-0  mt-4">
                        Market Place Feature:
                      </h4>
                      <div className="flex  items-center w-full ">
                        <select
                          className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-2 rounded-md   w-full"
                          name="marketplace_featured"
                          value={marketplace_featured}
                          onChange={handleChangeInputSP}
                        >
                          <option value={true}>Yes</option>
                          <option value={false}>No</option>
                        </select>
                      </div>
                      <h4 className="text-xs font-light mt-1">
                        Do you want this to be featured on our eCommerce?
                      </h4>
                    </div>
                    <div className="mr-2 flex-1  mx-0 md:mx-2">
                      <h4 className="text-sm font-semibold md:mt-0 mt-4">
                        I'm Charging:
                      </h4>
                      <div className="">
                        <select
                          className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-2.5 rounded-md   w-full"
                          name="price_cap_measurement_factor"
                          placeholder=""
                          value={price_cap_measurement_factor}
                          onChange={handleChangeInputSP}
                        >
                          <option value="unit">Per Unit</option>
                          <option value="event">Per Event</option>
                        </select>
                      </div>

                      <h4 className="text-xs font-light mt-1">
                        How would you be charging this service?
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center px-5 flex-col md:flex-row w-full  mt-6"></div>
                <div className="flex justify-center px-5 flex-col md:flex-row w-full mt-6">
                  <div className="mr-2 ">
                    <h4 className="text-sm font-semibold mt-4">Description:</h4>
                    <div className=" md:w-[300px] xl:w-[500px] ">
                      <textarea
                        className={
                          errorBox?.[`service_packages.${index}.description`]
                            ? showErrorBorder
                            : hideErrorBorder
                        }
                        name="description"
                        placeholder=""
                        value={description}
                        onChange={handleChangeInputSP}
                      />
                    </div>
                  </div>
                  <div className="mr-2">
                    <h4 className="text-sm font-semibold mt-4">
                      Service Offering:
                    </h4>
                    <div className=" md:w-[300px] xl:w-[500px]">
                      <textarea
                        className={
                          errorBox?.[
                            `service_packages.${index}.service_offering`
                          ]
                            ? showErrorBorder
                            : hideErrorBorder
                        }
                        name="service_offering"
                        placeholder=""
                        value={service_offering}
                        onChange={handleChangeInputSP}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`w-5/6 bg-gray-200 mx-2 mt-6 items-self-center p-2 rounded-md border-2 ${
                    errorBox?.[`service_packages.${index}.images`]
                      ? "border-red-600"
                      : "border-gray-300"
                  } flex justify-center`}
                >
                  <Dropzone clear={isFormSubmitted} passDataImg={passDataImg} />
                </div>
                <div className="flex justify-center flex-col md:flex-row w-full relative mt-6">
                  <div className="w-full px-2">
                    {data.locations.map((location, index) => {
                      const {
                        location_id,
                        price,
                        primary_location,
                        location_name,
                      } = location;

                      const handleChangeInputL = (e) => {
                        let { name, value } = e.target;
                        const pack = formData.service_packages;

                        if (value === "true") {
                          value = true;
                        } else if (value === "false") {
                          value = false;
                        }
                        const packL =
                          formData.service_packages[package_index].locations;
                        packL[index] = { ...packL[index], [name]: value };

                        setFormData({ ...formData, service_packages: pack });
                      };

                      const passData = (data) => {
                        setChildData(data);
                        const { name, id } = data;

                        const pack = formData.service_packages;

                        const packL =
                          formData.service_packages[package_index].locations;
                        packL[index] = { ...packL[index], location_id: id };
                        packL[index] = { ...packL[index], location_name: name };

                        setFormData({ ...formData, service_packages: pack });
                      };
                      return (
                        <div
                          key={index}
                          className="border-t-4 p-4 m-3 relative mt-4 w-full"
                        >
                          {/* <div className="flex items-center w-full flex-col border-t-4 rounded p-3 m-3 relative mt-4"> */}

                          <div className="flex justify-center px-5 flex-col md:flex-row relative mr-2 md:mt-4 mt-8 w-full">
                            <div className="mr-2 flex-1  mt-4">
                              <h4 className="text-sm font-semibold ">
                                Location:
                              </h4>
                              <div className="relative flex-initial ">
                                <input
                                  className={
                                    errorBox?.[
                                      `service_packages.${package_index}.locations.${index}.location_id`
                                    ]
                                      ? showErrorBorder
                                      : hideErrorBorder
                                  }
                                  name="location_name"
                                  placeholder="enter location here"
                                  value={location_name}
                                  onChange={handleChangeInputL}
                                  onFocus={() => {
                                    setSearchIndex(`${index}-${package_index}`);
                                    setFocused(true);
                                  }}
                                  onBlur={() => {
                                    setTimeout(() => {
                                      setFocused(false);
                                    }, 100);
                                  }}
                                />
                                <div
                                  className={`p-0 shadow-sm absolute bg-slate-200 w-full  rounded-md max-h-[15rem] overflow-scroll ${
                                    focused &&
                                    `${index}-${package_index}` === searchIndex
                                      ? "visible"
                                      : "invisible"
                                  } `}
                                >
                                  <LocationSearch
                                    passData={passData}
                                    input={location_name}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mr-2 flex-1  mt-4">
                              <div className="ml-2 flex-initial ">
                                <h4 className="text-sm font-semibold">
                                  Price(&#x20A6;):
                                </h4>
                                {/* <input
                          className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-md w-full  "
                          name="price"
                          placeholder="enter price here"
                          value={price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                          type="number"
                          onChange={handleChangeInputL}
                          /> */}
                                <NumberFormat
                                  value={price}
                                  name="price"
                                  placeholder="enter price here"
                                  className={
                                    errorBox?.[
                                      `service_packages.${package_index}.locations.${index}.price`
                                    ]
                                      ? showErrorBorder
                                      : hideErrorBorder
                                  }
                                  // displayType={'text'}
                                  thousandSeparator={true}
                                  // prefix={"₦"}

                                  onChange={handleChangeInputL}

                                  // renderText={(value, props) => <div {...props}>{value}</div>}
                                />
                              </div>
                            </div>
                            <div className=" mt-4 md:px-2 flex-1  ">
                              <label
                                className="text-xs font-semibold"
                                htmlFor="primary_location:"
                              >
                                Primary Location:
                              </label>

                              <select
                                className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-md   w-full"
                                name="primary_location"
                                placeholder=""
                                value={primary_location}
                                onChange={handleChangeInputL}
                              >
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex absolute top-2 right-5 ">
                            <h4
                              className="text-[0.75rem] px-3 mx-2 text-white flex items-center justify-center font-normal  p-2 cursor-pointer rounded  bg-primary1"
                              onClick={() => handleAddFields(index)}
                            >
                              Add Location Price
                            </h4>
                            <h4
                              className={`text-[0.75rem] px-3 mx-2 text-white p-2 rounded font-normal bg-red-900 cursor-pointer ${
                                index === 0 ? "hidden" : "block"
                              }`}
                              onClick={() => handleRemoveFields(index)}
                            >
                              Delete Location Price
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center bg-white pb-10 font-poppins">
        <button
          disabled={loading}
          className={`text-sm w-44 text-white p-2 rounded font-semibold ${
            loading ? "bg-gray-700" : "bg-primary1"
          }`}
          onClick={handleSubmit}
        >
          {loading ? "Submiting..." : "Submit"}
        </button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Application;
