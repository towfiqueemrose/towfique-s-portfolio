"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createModelFeedback } from '@/lib/actions';

// Define the shape of form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  desc: string;
}

// Define the shape of errors
interface FormErrors {
  name: string;
  email: string;
  phone: string;
  desc: string;
}

export function FeedbackForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    desc: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    desc: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: formData.name.trim().length < 2 ? 'Name must be at least 2 characters.' : '',
      email: !formData.email.includes('@') ? 'Please enter a valid email address.' : '',
      phone: formData.phone && isNaN(Number(formData.phone)) ? 'Phone number must be a valid number.' : '',
      desc: formData.desc.trim().length < 10 ? 'Description must be at least 10 characters.' : ''
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert phone to number or undefined
      const phoneValue = formData.phone ? parseInt(formData.phone) : undefined;

      const result = await createModelFeedback({
        name: formData.name,
        email: formData.email,
        desc: formData.desc,
        phone: phoneValue
      });

      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          desc: ''
        });
        alert('Feedback submitted successfully!');
      } else {
        alert('Error submitting feedback: ' + result.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block mb-2  text-white">Name</label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className='bg-white'
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-2  text-white">Email</label>
        <Input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className='bg-white'
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2  text-white">Phone (Optional)</label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className='bg-white'
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="desc" className="block mb-2 text-white">Feedback Description</label>
        <Textarea
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Please provide your detailed feedback here..."
          className='min-h-[100px] bg-white'
        />
        {errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  );
}