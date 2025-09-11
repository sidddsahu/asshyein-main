"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Tag } from "lucide-react";
import {
  addSubCategory,
  deleteSubCategory,
  fetchcategory,
  fetchSubcategory,
  updateSubCategory,
} from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubCategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchCategories = async () => {
          const response = await fetchcategory();
          if (response.data) {
            setCategories(response.data);
          }
        };
        fetchCategories();

        const fetchSubcategories = async () => {
          const response = await fetchSubcategory();
          if (response.data) {
            setSubCategories(response.data);
          }
        };
        fetchSubcategories();

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddSubCategory = async () => {
    if (!newSubCategory.trim() || !selectedCategory) {
      toast.warning("Please select a category and enter a sub-category name");
      return;
    }

    try {
      const response = await addSubCategory({
        name: newSubCategory.trim(),
        category: selectedCategory,
      });

      const newSubCategoryObj = response.data;
      setSubCategories([...subCategories, newSubCategoryObj]);
      setNewSubCategory("");

      toast.success("Sub-category added successfully!");
    } catch (error) {
      console.error("Error adding subcategory:", error);
      toast.error("Failed to add sub-category. Please try again.");
    }
  };

  const handleEditSubCategory = (subCategory) => {
    setEditingSubCategory(subCategory._id);
    setEditName(subCategory.name);
  };

  const handleSaveEdit = async (id) => {
    if (!editName.trim()) {
      toast.warning("Sub-category name cannot be empty");
      return;
    }

    try {
      await updateSubCategory(id, { name: editName.trim() });

      setSubCategories(
        subCategories.map((subCat) =>
          subCat._id === id ? { ...subCat, name: editName.trim() } : subCat
        )
      );

      setEditingSubCategory(null);
      setEditName("");
      toast.success("Sub-category updated successfully!");
    } catch (error) {
      console.error("Error updating subcategory:", error);
      toast.error("Failed to update sub-category. Please try again.");
    }
  };

  const handleDeleteSubCategory = async (id) => {
    try {
      await toast.promise(deleteSubCategory(id), {
        pending: "Deleting sub-category...",
        success: "Sub-category deleted successfully!",
        error: "Failed to delete sub-category",
      });

      setSubCategories(subCategories.filter((subCat) => subCat._id !== id));
    } catch (error) {
      console.error("Error deleting subcategory:", error);
    }
  };

  const filteredSubCategories = selectedCategory
    ? subCategories.filter((subCat) => subCat.category === selectedCategory)
    : subCategories;

  return (
    <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

      <div className='px-6 py-4 bg-primary-600 text-white flex items-center'>
        <Tag className='mr-2' size={24} />
        <h2 className='text-xl font-bold'>Sub-Category Management</h2>
      </div>

      <div className='p-6'>
        <div className='mb-6'>
          <h3 className='text-lg font-medium mb-3 text-black'>
            Add New Sub-Category
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className='md:col-span-1'>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
              >
                <option value=''>Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='md:col-span-2 flex'>
              <input
                type='text'
                value={newSubCategory}
                onChange={(e) => setNewSubCategory(e.target.value)}
                placeholder='Enter sub-category name'
                className='flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                onKeyDown={(e) => e.key === "Enter" && handleAddSubCategory()}
              />
              <button
                onClick={handleAddSubCategory}
                disabled={!newSubCategory.trim() || !selectedCategory}
                className='px-4 py-2 bg-red-500 font-bold text-white  rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center'
              >
                <Plus size={18} className='mr-1' />
                Addss
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Categories List */}
        <div>
          <h3 className='text-lg font-medium mb-3'>
            Sub-Categories{" "}
            {selectedCategory &&
              `for ${
                categories.find((c) => c._id === selectedCategory)?.name || ""
              }`}
          </h3>

          {loading ? (
            <div className='text-center py-4'>Loading sub-categories...</div>
          ) : filteredSubCategories.length === 0 ? (
            <div className='text-center py-4 text-gray-500'>
              {selectedCategory
                ? "No sub-categories found for this category."
                : "No sub-categories found."}
            </div>
          ) : (
            <div className='border rounded-md overflow-hidden'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Name
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Category
                    </th>
                    <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {filteredSubCategories.map((subCategory) => (
                    <tr key={subCategory._id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {editingSubCategory === subCategory._id ? (
                          <input
                            type='text'
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className='w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                            autoFocus
                          />
                        ) : (
                          <div className='text-sm font-medium text-gray-900'>
                            {subCategory.name}
                          </div>
                        )}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                          {categories.find(
                            (c) => c._id === subCategory.category
                          )?.name || "Unknown"}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        {editingSubCategory === subCategory._id ? (
                          <div className='flex justify-end space-x-2'>
                            <button
                              onClick={() => handleSaveEdit(subCategory._id)}
                              className='text-green-600 hover:text-green-900'
                            >
                              <Save size={18} />
                            </button>
                            <button
                              onClick={() => {
                                setEditingSubCategory(null);
                                toast.info("Edit cancelled");
                              }}
                              className='text-gray-600 hover:text-gray-900'
                            >
                              <X size={18} />
                            </button>
                          </div>
                        ) : (
                          <div className='flex justify-end space-x-3'>
                            <button
                              onClick={() => handleEditSubCategory(subCategory)}
                              className='text-blue-600 hover:text-blue-900'
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteSubCategory(subCategory._id)
                              }
                              className='text-red-600 hover:text-red-900'
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryManagement;
