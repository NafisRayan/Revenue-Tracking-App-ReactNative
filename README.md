# Revenue Tracking App

This is a React Native application built with Expo and TypeScript that serves as a financial dashboard. It provides a comprehensive overview of key business metrics, revenue trends, and recent transactions.

## Features

*   **Dashboard:** A central hub displaying:
    *   A welcoming message to the user.
    *   The user's current balance with options to add money or transfer funds.
    *   A horizontally scrollable grid of key business metrics.
    *   A weekly revenue trend chart.
    *   A list of recent transactions.
*   **Analytics:** A dedicated screen for in-depth financial analysis, including:
    *   A period selector to view data by week, month, quarter, or year.
    *   A revenue trend chart that updates based on the selected period.
    *   A key insights section that provides a summary of financial performance.

## Tech Stack

*   **Framework:** React Native with Expo
*   **Language:** TypeScript
*   **Navigation:** Expo Router
*   **UI Components:**
    *   `@expo/vector-icons` and `lucide-react-native` for icons.
    *   `victory-native` for charts.
*   **Styling:** StyleSheet API

## Data

The application currently uses mock data from `data/mockData.ts` to simulate financial information. The data model includes:

*   **Transactions:** Each transaction has an `id`, `type` (income or expense), `amount`, `description`, `category`, `date`, `status`, and `merchant`.
*   **Revenue Metrics:** A collection of key metrics such as `totalRevenue`, `monthlyGrowth`, `weeklyRevenue`, `dailyRevenue`, `transactionCount`, and `avgTransactionValue`.
*   **Chart Data:** Data for weekly and monthly revenue trends.
*   **Business Metrics:** A list of business metrics with `title`, `value`, `change`, `icon`, and `color`.

## Getting Started

### Prerequisites

*   Node.js and npm/yarn installed.
*   Expo CLI installed (`npm install -g expo-cli`).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/NafisRayan/Revenue-Tracking-App-ReactNative.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd TAB
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npx expo start
```

This will start the Expo development server. You can then run the application on a physical device using the Expo Go app or in a simulator/emulator.

## Available Scripts

*   `npm run dev`: Starts the Expo development server.
*   `npm run build:web`: Creates a web build of the application.
*   `npm run lint`: Lints the source code using Expo's linting configuration.