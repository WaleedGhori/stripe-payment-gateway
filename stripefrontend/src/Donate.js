import React, { useState } from "react";
import { MdOutlineCircle } from "react-icons/md";
import { Segmented } from "antd";

const Donate = () => {
  const [value, setValue] = useState("One-time");

  return (
    <div className="h-full">
      <img width={"100%"} src={"./origanization.png"} alt="organization" />
      <div className="flex flex-wrap w-full -mt-20 ">
        <div className="md:w-[55%] w-full bg-red-300 ml-1 mr-3 rounded-md">
          <h1>Mission</h1>
          <p>
            Save Venice Inc. is the leading American nonprofit organization
            dedicated to preserving the artistic heritage of Venice, Italy.
            Since 1971, Save Venice has funded the conservation of more than 550
            projects comprising over 1,000 individual artworks. In 2015, Save
            Venice established the Rosand Library & Study Center in Venice,
            creating a nexus for the research of Venetian art, history, and
            conservation. Save Venice also provides grants for fellowships,
            exhibitions, and publications to advance Venetian scholarship and
            conservation.
          </p>
          <div></div>
          <p>
            Conservation projects are selected on the basis of artistic merit,
            historical importance, and urgency of need by the Save Venice Board
            of Directors and its Projects Committee of renowned experts in the
            fields of art, history, and conservation. Save Venice works in
            collaboration with the Italian Ministry of Culture. Save Venice has
            numerous restorations underway throughout the city, carried out by
            carefully selected restorers who are supervised by the
            Superintendency and Save Venice staff. This oversight assures that
            donations are tracked at each step of the restoration process and
            are used wisely. Conservation treatments are made possible with
            support from individuals, foundations, and corporations that believe
            in a shared responsibility to preserve the world’s irreplaceable
            artistic and cultural treasures found in Venice.
          </p>
          <h1>Why Should Americans Save Venice?</h1>
          <p>
            We are often asked why Americans should help restore art works
            belonging to the Italian government. The answer is that the Italians
            only hold these treasures in trust for all of us who descend from
            the Renaissance, and it is our shared responsibility to do what we
            can to help. When we came to the New World, we did not renounce our
            cultural heritage. It is an essential part of who we are. It is one
            of the title deeds to our civilization. We do not want to see it
            deteriorate and disappear. Per capita, Italy spends ten times more
            to preserve its patrimony than the United States. Its restorers are
            the most skillful in the world. They are extraordinarily dedicated
            to their work. They are tireless workers. They are paid a pittance.
            In Venice, Save Venice knows and loves them all. Yet, there are too
            many treasures residing in Italy for the Italians to protect. The
            cost is simply too great. The Old World must look to the New for
            help. If it is not forthcoming, we will all see the treasures of our
            heritage fade. If they are gone, we will remember them as they were,
            but our children and theirs will only see them in books. When we
            look on Titian’s The Presentation of the Virgin, we know that as
            long as that painting lives, the human spirit will never die. The
            Dark Ages are never far from us so it is up to all of us to preserve
            the light. – Randolph H. Guthrie, Chairman Emeritus Your
            tax–deductible contribution to Save Venice will support our mission
            to conserve and protect the artistic heritage of Venice. You may
            also make a gift by calling 212-737-3141 or mailing a check to Save
            Venice Inc., 133 East 58th Street, Suite 501, New York, NY 10022.
            Make payable to Save Venice Inc. Tax ID 23-7179996.
          </p>
        </div>
        <div className="md:w-[42%] w-full  ml-2 rounded-md">
          <div className="flex flex-row bg-green-500 py-8">
            <h1>Choose Ammount</h1>
            <MdOutlineCircle />
            <MdOutlineCircle />
            <MdOutlineCircle />
          </div>
          <h1>Thank you for your generous donation!</h1>
          <Segmented
            options={["One-time", "Monthly", "Annually"]}
            value={value}
            onChange={setValue}
          />
          {value === "One-time" ? (
            <div>
              <div className="flex flex-row justify-center mb-4">
                <button className="bg-white border-2 border-yellow-600 px-8 py-4 mx-2">
                  $ 25
                </button>
                <button className="bg-white border-2 border-yellow-600 px-8 py-4 mx-2">
                  $ 50
                </button>
                <button className="bg-white border-2 border-yellow-600 px-8 py-4 mx-2">
                  $ 75
                </button>
              </div>
              <input
                className="bg-red-300 text-black border-2 border-yellow-600 px-4 py-4 mx-2 w-40"
                placeholder="$ Custom Amount"
              />
            </div>
          ) : value === "Monthly" ? (
            <div>Monthly</div>
          ) : value === "Annually" ? (
            <div>Annually</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Donate;
