# 🔥 Pyro Boilerplate API Template

![Pyro Boilerplate GIF](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenRwcmszcjQxZTczMjQweHZmOHphZWFpbThuMjZxYndrYzB3cnFvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72FfM5HJydzafgUE/giphy.gif)

**Pyro Boilerplate** is a comprehensive and modular API template designed to significantly speed up your development process by providing essential features pre-configured and ready to use. Start building your next robust application immediately!

## ✨ About the Project

Pyro Boilerplate serves as an **API template** with built-in, core functionalities, allowing developers to create scalable RESTful services quickly and efficiently.

It is engineered for **modularity**, giving you the flexibility to easily swap out major components like databases and payment processors without extensive refactoring.

## 🚀 Key Features

This template comes equipped with critical features essential for any modern API:

* **User Management (CRUD):** Complete **C**reate, **R**ead, **U**pdate, and **D**elete operations for user resources.
* **Authentication & Login:** Secure token-based authentication (JWT) for user registration and login flows, including protected routes.
* **Payment Gateway Integration:** Pre-configured module structure to easily integrate and manage various payment processors.

## 💻 Tech Stack

The boilerplate is built on a modern, high-performance technology stack:

| Component    | Technology   | Description                                                                 |
| :----------- | :----------- | :-------------------------------------------------------------------------- |
| **Framework** | **NestJS** | Powerful Node.js framework for building efficient and scalable server-side applications. |
| **Language** | **TypeScript** | Ensures high code quality, type safety, and better maintainability.         |
| **ORM** | **Prisma** | Next-generation ORM for type-safe database access and streamlined data modeling. |
| **Modularity** | **Database Agnostic** | The architecture allows you to choose and swap between different databases (e.g., PostgreSQL, MongoDB). |
| **Modularity** | **Payment Processor Agnostic** | Easily integrate and switch between various payment gateways (e.g., Stripe, PayPal, Mercado Pago). |

## 🌟 Modular Architecture

One of the core strengths of Pyro Boilerplate is its modular design:

> "Pyro Boilerplate is a complete modular API template that lets you swap databases and payment processors."

* **Database Flexibility:** The use of Prisma ORM abstracts the database layer, making it straightforward to switch between different SQL or NoSQL databases.
* **Plug-and-Play Payments:** Payment logic is isolated in its own module, allowing you to define a consistent interface and plug in any payment provider needed.

---

## 🧑‍💻 WIP Features
- [ ]  Auth Login
- [ ]  Social Login
- [ ]  Reset Password
- [ ]  Modular database
- [ ]  Route to Pay (make user having a billing)
- [ ]  make the payment processors works
- [ ]  modular payment processors

---

## 🛠️ Getting Started

Follow these steps to set up and run your NestJS API template locally.

### 1. Prerequisites

Ensure you have the following installed:

* **Node.js** (v18.x or higher is recommended)
* **npm** or **Yarn** (npm is used in the examples)
* A **Database** instance (e.g., PostgreSQL, MySQL, or Docker for easy setup).

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone git@github.com:silviozum/pyro-boilerplate.git
cd pyro-boilerplate
npm install

