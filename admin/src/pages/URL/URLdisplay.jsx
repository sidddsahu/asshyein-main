// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaTrash, FaEdit, FaEye } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FiX, FiSave } from 'react-icons/fi';
// import {
//   fetchAllUrls,
//   fetchUrlById,
//   deleteUrl,
//   updateUrl,
//   clearSelectedUrl
// } from './Redux/UrlSlice';

// const URLdisplay = () => {
//   const dispatch = useDispatch();
//   const { items: urls, loading, error, selectedUrl } = useSelector((state) => state.urls);
  
//   const [filterText, setFilterText] = useState('');
//   const [editingUrl, setEditingUrl] = useState(null);
//   const [isEditFormOpen, setIsEditFormOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     dispatch(fetchAllUrls());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error.message || "An error occurred");
//     }
//   }, [error]);

//   const handleView = (id) => {
//     dispatch(fetchUrlById(id));
//   };

//   const handleDelete = async (id) => {
//     const confirm = window.confirm('Are you sure you want to delete this URL?');
//     if (!confirm) return;

//     try {
//       await dispatch(deleteUrl(id)).unwrap();
//       toast.success('URL deleted successfully');
//       if (selectedUrl?._id === id) {
//         dispatch(clearSelectedUrl());
//       }
//     } catch (err) {
//       toast.error(`Error deleting URL: ${err.message}`);
//     }
//   };

//   const handleEditClick = (url) => {
//     setEditingUrl({ ...url });
//     setIsEditFormOpen(true);
//   };

//   const handleSaveEdit = async (e) => {
//     e.preventDefault();
//     if (!editingUrl) return;
    
//     setIsSubmitting(true);
    
//     try {
//       await dispatch(updateUrl({
//         id: editingUrl._id,
//         URL: editingUrl.URL
//       })).unwrap();

//       toast.success('URL updated successfully');
//       setIsEditFormOpen(false);
//       dispatch(fetchAllUrls());
//     } catch (err) {
//       toast.error(`Error updating URL: ${err.message}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingUrl(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const filteredUrls = urls.filter(
//     url => url.URL?.toLowerCase().includes(filterText.toLowerCase())
//   );

//   const columns = [
//     {
//       name: 'S.No',
//       selector: (row, index) => index + 1,
//       sortable: true,
//       width: '80px',
//       center: true,
//       cell: (row, index) => (
//         <span className="text-gray-600 font-medium">{index + 1}</span>
//       ),
//     },
//     {
//       name: 'URL',
//       selector: (row) => row.URL || 'N/A',
//       sortable: true,
//       cell: (row) => (
//         <a
//           href={row.URL}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 underline hover:text-blue-800 truncate block max-w-xs"
//         >
//           {row.URL}
//         </a>
//       ),
//       grow: 2,
//     },
//     {
//       name: 'Actions',
//       cell: (row) => (
//         <div className="flex space-x-2">
//           <button
//             onClick={() => handleView(row._id)}
//             className="text-green-500 hover:text-green-700 p-1 rounded hover:bg-green-50"
//             title="View"
//             aria-label="View"
//           >
//             <FaEye />
//           </button>
//           <button
//             onClick={() => handleEditClick(row)}
//             className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
//             title="Edit"
//             aria-label="Edit"
//           >
//             <FaEdit />
//           </button>
//           <button
//             onClick={() => handleDelete(row._id)}
//             className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
//             title="Delete"
//             aria-label="Delete"
//           >
//             <FaTrash />
//           </button>
//         </div>
//       ),
//       width: '120px',
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ];

//   const customStyles = {
//     headCells: {
//       style: {
//         backgroundColor: '#f9fafb',
//         fontWeight: '600',
//         color: '#374151',
//         paddingLeft: '16px',
//         paddingRight: '16px',
//       },
//     },
//     cells: {
//       style: {
//         paddingLeft: '16px',
//         paddingRight: '16px',
//       },
//     },
//     rows: {
//       style: {
//         backgroundColor: '#ffffff',
//         '&:not(:last-of-type)': {
//           borderBottom: '1px solid #e5e7eb',
//         },
//         '&:hover': {
//           backgroundColor: '#f3f4f6',
//         },
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <ToastContainer 
//         position="top-right" 
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
      
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-900">Video URLs</h1>
//         </div>

//         <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
//           <input
//             type="text"
//             placeholder="Search by URL..."
//             className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
//             value={filterText}
//             onChange={(e) => setFilterText(e.target.value)}
//             aria-label="Search URLs"
//           />
//         </div>

//         {selectedUrl && (
//           <div className="mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-xl font-semibold text-gray-800">URL Details</h2>
//               <button
//                 onClick={() => dispatch(clearSelectedUrl())}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//                 aria-label="Close details"
//               >
//                 <FiX size={24} />
//               </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-700">ID:</p>
//                 <p className="text-gray-900 break-all">{selectedUrl._id}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-700">URL:</p>
//                 <a
//                   href={selectedUrl.URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline hover:text-blue-800 break-all"
//                 >
//                   {selectedUrl.URL}
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
//           <DataTable
//             columns={columns}
//             data={filteredUrls}
//             pagination
//             paginationPerPage={10}
//             paginationRowsPerPageOptions={[5, 10, 15, 20]}
//             highlightOnHover
//             striped
//             responsive
//             progressPending={loading}
//             noDataComponent={<div className="py-8 text-gray-500">No URLs found</div>}
//             persistTableHead
//             className="border-t"
//             customStyles={customStyles}
//           />
//         </div>

//         {isEditFormOpen && (
//           <div className="bg-white rounded-lg shadow-md w-full p-6 mb-6 border border-gray-200">
//             <div className="flex justify-between items-center border-b pb-4 mb-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Edit URL
//               </h2>
//               <button
//                 onClick={() => setIsEditFormOpen(false)}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//                 disabled={isSubmitting}
//                 aria-label="Close edit form"
//               >
//                 <FiX size={24} />
//               </button>
//             </div>
            
//             <form onSubmit={handleSaveEdit}>
//               <div className="mb-4">
//                 <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-1">
//                   URL
//                 </label>
//                 <input
//                   id="url-input"
//                   type="url"
//                   name="URL"
//                   value={editingUrl?.URL || ''}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
              
//               <div className="flex justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsEditFormOpen(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
//                   disabled={isSubmitting}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Saving...
//                     </>
//                   ) : (
//                     <>
//                       <FiSave size={18} />
//                       Save Changes
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default URLdisplay;



import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiX, FiSave } from 'react-icons/fi';
import {
  fetchAllUrls,
  fetchUrlById,
  deleteUrl,
  updateUrl,
  clearSelectedUrl
} from './Redux/UrlSlice';

const URLdisplay = () => {
  const dispatch = useDispatch();
  const { items: urls, loading, error, selectedUrl } = useSelector((state) => state.urls);
  
  const [filterText, setFilterText] = useState('');
  const [editingUrl, setEditingUrl] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(fetchAllUrls());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [error]);

  const handleView = (id) => {
    dispatch(fetchUrlById(id));
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this URL?');
    if (!confirm) return;

    try {
      await dispatch(deleteUrl(id)).unwrap();
      toast.success('URL deleted successfully');
      if (selectedUrl?._id === id) {
        dispatch(clearSelectedUrl());
      }
    } catch (err) {
      toast.error(`Error deleting URL: ${err.message}`);
    }
  };

  const handleEditClick = (url) => {
    setEditingUrl({ ...url });
    setIsEditFormOpen(true);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingUrl) return;
    
    setIsSubmitting(true);
    
    try {
      await dispatch(updateUrl({
        id: editingUrl._id,
        URL: editingUrl.URL,
        altText: editingUrl.altText
      })).unwrap();

      toast.success('URL updated successfully');
      setIsEditFormOpen(false);
      dispatch(fetchAllUrls());
    } catch (err) {
      toast.error(`Error updating URL: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUrl(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredUrls = urls.filter(
    url => url.URL?.toLowerCase().includes(filterText.toLowerCase()) ||
          url.altText?.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'S.No',
      selector: (row, index) => index + 1,
      sortable: true,
      width: '80px',
      center: true,
      cell: (row, index) => (
        <span className="text-gray-600 font-medium">{index + 1}</span>
      ),
    },
    {
      name: 'URL',
      selector: (row) => row.URL || 'N/A',
      sortable: true,
      cell: (row) => (
        <a
          href={row.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 truncate block max-w-xs"
        >
          {row.URL}
        </a>
      ),
      grow: 2,
    },
    {
      name: 'Alt Text',
      selector: (row) => row.altText || 'N/A',
      sortable: true,
      cell: (row) => (
        <span className="text-gray-700 truncate block max-w-xs">
          {row.altText}
        </span>
      ),
      grow: 1,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleView(row._id)}
            className="text-green-500 hover:text-green-700 p-1 rounded hover:bg-green-50"
            title="View"
            aria-label="View"
          >
            <FaEye />
          </button>
          <button
            onClick={() => handleEditClick(row)}
            className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
            title="Edit"
            aria-label="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
            title="Delete"
            aria-label="Delete"
          >
            <FaTrash />
          </button>
        </div>
      ),
      width: '120px',
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f9fafb',
        fontWeight: '600',
        color: '#374151',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    rows: {
      style: {
        backgroundColor: '#ffffff',
        '&:not(:last-of-type)': {
          borderBottom: '1px solid #e5e7eb',
        },
        '&:hover': {
          backgroundColor: '#f3f4f6',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Video URLs</h1>
        </div>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Search by URL or Alt Text..."
            className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            aria-label="Search URLs"
          />
        </div>

        {selectedUrl && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">URL Details</h2>
              <button
                onClick={() => dispatch(clearSelectedUrl())}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close details"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700">ID:</p>
                <p className="text-gray-900 break-all">{selectedUrl._id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">URL:</p>
                <a
                  href={selectedUrl.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 break-all"
                >
                  {selectedUrl.URL}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Alt Text:</p>
                <p className="text-gray-900 break-all">{selectedUrl.altText || 'N/A'}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <DataTable
            columns={columns}
            data={filteredUrls}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            highlightOnHover
            striped
            responsive
            progressPending={loading}
            noDataComponent={<div className="py-8 text-gray-500">No URLs found</div>}
            persistTableHead
            className="border-t"
            customStyles={customStyles}
          />
        </div>

        {isEditFormOpen && (
          <div className="bg-white rounded-lg shadow-md w-full p-6 mb-6 border border-gray-200">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Edit URL
              </h2>
              <button
                onClick={() => setIsEditFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                disabled={isSubmitting}
                aria-label="Close edit form"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSaveEdit}>
              <div className="mb-4">
                <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-1">
                  URL
                </label>
                <input
                  id="url-input"
                  type="url"
                  name="URL"
                  value={editingUrl?.URL || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="altText-input" className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text
                </label>
                <input
                  id="altText-input"
                  type="text"
                  name="altText"
                  value={editingUrl?.altText || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditFormOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FiSave size={18} />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default URLdisplay;