import { router } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [expenses, setExpenses] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>ExpenseWise</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>Total Spending</Text>
          <Text style={styles.amount}>₹0</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>This Month</Text>
          <Text style={styles.amount}>₹0</Text>
        </View>

        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {!expenses && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No expenses yet</Text>
            <Text style={styles.emptyText}>
              Add your first expense
            </Text>
          </View>
        )}

        <Pressable
          onPress={() => {
            router.push("/home/add-expense");
          }}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+ Add Expense</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 24,
  },

  summaryCard: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
  },

  cardLabel: {
    color: "#94A3B8",
    fontSize: 15,
    marginBottom: 8,
  },

  amount: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 18,
    marginBottom: 14,
  },

  emptyCard: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 6,
  },

  emptyText: {
    color: "#94A3B8",
    fontSize: 14,
  },

  addButton: {
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

