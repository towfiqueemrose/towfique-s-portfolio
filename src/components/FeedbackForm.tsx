"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createModelFeedback } from '@/lib/actions';

interface FormData {
  name: string;
  email: string;
  phone: string;
  desc: string;
}
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const phoneValue = formData.phone ? parseInt(formData.phone) : undefined;

      const result = await createModelFeedback({
        name: formData.name,
        email: formData.email,
        desc: formData.desc,
        phone: phoneValue
      });

      if (result.success) {
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
    <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block mb-2 text-white">
          Name
        </label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-white"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 absolute top-full left-0 w-full">
              {errors.name}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-white">Email</label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className='bg-white'
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 absolute top-full left-0 w-full">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-white">Phone (Optional)</label>
        <div className="relative">
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className='bg-white'
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 absolute top-full left-0 w-full">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="desc" className="block mb-2 text-white">Feedback Description</label>
        <div className="relative">
          <Textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Please provide your detailed feedback here..."
            className='min-h-[100px] bg-white'
          />
          {errors.desc && (
            <p className="text-red-500 text-sm mt-1 absolute top-full left-0 w-full">
              {errors.desc}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white text-md font-bold hover:bg-blue-600">
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  );
}