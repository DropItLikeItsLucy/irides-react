// src/pages/QuotePage.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

// 1. Define the form schema using Zod
const quoteSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(5, { message: 'Phone number seems too short' }), // Optional field
    company: z.string().optional(),
    serviceType: z.string().min(1, { message: 'Please select a service type' }), // Ensure a selection is made
    quantity: z.number({ invalid_type_error: 'Quantity must be a number' }).positive({ message: 'Quantity must be positive' }).optional(),
    details: z.string().min(10, { message: 'Please provide at least 10 characters of detail' }),
    // fileUpload: z.instanceof(FileList).optional(), // File uploads need special handling - optional for now
});

// Infer the TypeScript type from the schema
type QuoteFormInputs = z.infer<typeof quoteSchema>;

const QuotePage: React.FC = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormInputs>({
        resolver: zodResolver(quoteSchema),
    });

    // 3. Define the submission handler
    // TODO: Replace console.log with actual submission logic (e.g., API call, Formspree)
    const onSubmit: SubmitHandler<QuoteFormInputs> = async (data) => {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form Data:', data);
        // Handle file uploads separately if included
        // Show success message / redirect
        alert(t('quoteFormSuccess')); // Simple alert for now
    };

    // Basic CSS classes for form elements (customize further)
    const inputClass = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-irides-500 focus:border-irides-500 sm:text-sm";
    const labelClass = "block text-sm font-medium text-gray-700";
    const errorClass = "mt-1 text-xs text-red-600";

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    {t('quotePageTitle', 'Request a Quote')} {/* Add key */}
                </h1>
                <p className="text-lg text-gray-600 text-center mb-8 lg:mb-12">
                    {t('quotePageDescription', 'Fill out the form below, and we\'ll get back to you with a personalized quote as soon as possible.')} {/* Add key */}
                </p>

                {/* 2. Build the form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className={labelClass}>{t('formLabelName', 'Full Name')}</label>
                        <input type="text" id="name" {...register('name')} className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`} />
                        {errors.name && <p className={errorClass}>{t(errors.name.message || 'formErrorRequired')}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className={labelClass}>{t('formLabelEmail', 'Email Address')}</label>
                        <input type="email" id="email" {...register('email')} className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`} />
                        {errors.email && <p className={errorClass}>{t(errors.email.message || 'formErrorEmail')}</p>}
                    </div>

                     {/* Phone Field (Optional) */}
                     <div>
                        <label htmlFor="phone" className={labelClass}>{t('formLabelPhone', 'Phone Number')} 
                            {/* <span className="text-xs text-gray-500">({t('formLabelOptional', 'Optional')})</span> */}
                            </label>
                            <input type="tel" id="phone" {...register('phone')} className={`${inputClass} ${errors.phone ? 'border-red-500' : ''}`} />
                            {errors.phone && <p className={errorClass}>{t(errors.phone.message || 'formErrorRequired')}</p>}
                        {/* No client-side validation shown, but could be added */}
                    </div>

                     {/* Company Field (Optional) */}
                    <div>
                        <label htmlFor="company" className={labelClass}>{t('formLabelCompany', 'Company Name')} <span className="text-xs text-gray-500">({t('formLabelOptional', 'Optional')})</span></label>
                        <input type="text" id="company" {...register('company')} className={inputClass} />
                    </div>

                    {/* Service Type (Dropdown) */}
                    <div>
                        <label htmlFor="serviceType" className={labelClass}>{t('formLabelService', 'Service Type')}</label>
                        <select id="serviceType" {...register('serviceType')} className={`${inputClass} ${errors.serviceType ? 'border-red-500' : ''}`}>
                            <option value="">{t('formSelectPlaceholder', '-- Select a Service --')}</option>
                            <option value="business_cards">{t('serviceBusinessCards')}</option>
                            <option value="leaflets_flyers">{t('serviceLeaflets')}</option>
                            <option value="books_booklets">{t('serviceBooks')}</option>
                            <option value="magazines">{t('serviceMagazines')}</option>
                            <option value="posters">{t('servicePosters')}</option>
                            <option value="brochures">{t('serviceBrochures')}</option>
                            <option value="packaging">{t('servicePackaging')}</option>
                            <option value="other">{t('formServiceOther', 'Other (Specify Below)')}</option>
                        </select>
                        {errors.serviceType && <p className={errorClass}>{t(errors.serviceType.message || 'formErrorRequired')}</p>}
                    </div>

                     {/* Quantity Field (Optional) */}
                     <div>
                        <label htmlFor="quantity" className={labelClass}>{t('formLabelQuantity', 'Estimated Quantity')} <span className="text-xs text-gray-500">({t('formLabelOptional', 'Optional')})</span></label>
                        <input
                            type="number"
                            id="quantity"
                            {...register('quantity', { valueAsNumber: true })} // Ensure value is treated as number
                            className={`${inputClass} ${errors.quantity ? 'border-red-500' : ''}`}
                            min="1" // Basic HTML5 validation
                        />
                        {errors.quantity && <p className={errorClass}>{t(errors.quantity.message || 'formErrorNumberPositive')}</p>}
                    </div>

                    {/* Details Textarea */}
                    <div>
                        <label htmlFor="details" className={labelClass}>{t('formLabelDetails', 'Project Details')}</label>
                        <textarea
                            id="details"
                            rows={4}
                            {...register('details')}
                            className={`${inputClass} ${errors.details ? 'border-red-500' : ''}`}
                            placeholder={t('formPlaceholderDetails', 'Please describe your project needs, dimensions, paper type, deadlines, etc.')}
                        />
                        {errors.details && <p className={errorClass}>{t(errors.details.message || 'formErrorMinLength', { count: 10 })}</p>}
                    </div>

                    {/* File Upload (Basic - More complex handling needed for actual upload) */}
                    {/* <div>
                        <label htmlFor="fileUpload" className={labelClass}>{t('formLabelFile', 'Upload Design File')} <span className="text-xs text-gray-500">({t('formLabelOptional', 'Optional')})</span></label>
                        <input
                            type="file"
                            id="fileUpload"
                            {...register('fileUpload')}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-irides-100 file:text-irides-700 hover:file:bg-irides-200"
                         />
                         {errors.fileUpload && <p className={errorClass}>{t(errors.fileUpload.message || 'formErrorFile')}</p>}
                    </div> */}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`
                                w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm
                                text-lg font-medium text-white bg-irides-700 hover:bg-irides-600
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irides-500
                                disabled:opacity-50 disabled:cursor-not-allowed
                            `}
                        >
                            {isSubmitting ? t('formSubmitting', 'Submitting...') : t('formSubmitButton', 'Submit Quote Request')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuotePage;