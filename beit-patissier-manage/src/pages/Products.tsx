import React, { useEffect, useState } from 'react';
import { GetAllProducts } from '../services/ProductService';
import type { Product } from '../models/Product';
import TableProduct from '../components/GenericTable';

type ViewMode = 'cards' | 'table';

const ProductsPage: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('cards');
    const [searchTerm, setSearchTerm] = useState('');
    // const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    // Sample data - replace with actual data fetching
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const products = await GetAllProducts();
                setProductsList(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = productsList.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        // const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesPriceMin = !priceRange.min || product.price >= Number(priceRange.min);
        const matchesPriceMax = !priceRange.max || product.price <= Number(priceRange.max);

        return matchesSearch && matchesPriceMin && matchesPriceMax; // ..matchesCategory
    });

    // const categories = [...new Set(productsList.map(p => p.category))];

    return (
        <div className="p-6">
            {/* Header Controls */}
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    {/* View Mode Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setViewMode('cards')}
                            className={`px-4 py-2 rounded ${viewMode === 'cards' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            תצוגת כרטיסיות
                        </button>
                        <button
                            onClick={() => setViewMode('table')}
                            className={`px-4 py-2 rounded ${viewMode === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            תצוגת טבלה
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="חיפוש מוצרים..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-3 py-2 border rounded"
                        />

                        {/* <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="px-3 py-2 border rounded"
                        >
                            <option value="">כל הקטגוריות</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select> */}

                        <input
                            type="number"
                            placeholder="מחיר מינימום"
                            value={priceRange.min}
                            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                            className="px-3 py-2 border rounded w-32"
                        />

                        <input
                            type="number"
                            placeholder="מחיר מקסימום"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                            className="px-3 py-2 border rounded w-32"
                        />
                    </div>
                </div>
            </div>

            {/* Products Display */}
            {viewMode === 'cards' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <div key={product.productId} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                            {/* <img
                                src={product.image || '/assets/empty-product.png'}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded mb-4"
                            /> */}
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-green-600">₪{product.price}</span>
                                {/* <span className="text-sm bg-gray-100 px-2 py-1 rounded">{product.category}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <TableProduct data={productsList} />
                </div>
            )}
        </div>
    );
};

export default ProductsPage;