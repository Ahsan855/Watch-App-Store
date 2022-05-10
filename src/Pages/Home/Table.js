import React from "react";
import img1 from '../../image/image1.jpg'
import img2 from '../../image/image2.jpg'
import img3 from '../../image/image3.jpg'
import img4 from '../../image/image4.jpg'

const Table = () => {
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox-primary checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Services</th>
            <th>Color</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox-primary checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src={img1}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Hart Hagerty</div>
                  <div class="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span class="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox-primary checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src={img2}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Brice Swyre</div>
                  <div class="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span class="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox-primary checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src={img3}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Marjy Ferencz</div>
                  <div class="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span class="badge badge-ghost badge-sm">Office Assistant I</span>
            </td>
            <td>Crimson</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox-primary checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src={img4}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Yancy Tear</div>
                  <div class="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span class="badge badge-ghost badge-sm">
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Services</th>
            <th>Color</th>
            <th>details</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
