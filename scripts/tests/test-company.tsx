import { db } from "@/db";
import { company } from "@/db/company-schema";
import { eq } from "drizzle-orm";

const testCompany = async () => {
  try {
    console.log("🧪 Testing company table with Drizzle...\n");

    // 1. INSERT - Create a test company
    console.log("📝 Inserting test company...");
    const [newCompany] = await db
      .insert(company)
      .values({
        ownerUserId: "test-user-id-123", // Use a fake user ID for testing
        name: "Test Company Ltd",
        slug: "test-company-ltd",
        email: "test@company.com",
        phone: "+36 1 234 5678",
        timezone: "Europe/Budapest",
      })
      .returning();

    console.log("✅ Company created:", newCompany);
    console.log("   ID:", newCompany.id);
    console.log("   Name:", newCompany.name);
    console.log("   Slug:", newCompany.slug);
    console.log("");

    // 2. SELECT - Verify it exists
    console.log("🔍 Fetching the company...");
    const foundCompany = await db.query.company.findFirst({
      where: eq(company.id, newCompany.id),
    });

    console.log("✅ Company found:", foundCompany?.name);
    console.log("");

    // 3. DELETE - Remove the test company
    console.log("🗑️  Deleting test company...");
    await db.delete(company).where(eq(company.id, newCompany.id));

    console.log("✅ Company deleted successfully!");
    console.log("");

    // 4. VERIFY deletion
    console.log("🔍 Verifying deletion...");
    const deletedCompany = await db.query.company.findFirst({
      where: eq(company.id, newCompany.id),
    });

    if (!deletedCompany) {
      console.log("✅ Confirmed: Company no longer exists in database");
    } else {
      console.log("❌ Error: Company still exists!");
    }

    console.log("\n🎉 Test completed successfully!");
  } catch (error) {
    console.error("❌ Test failed:", error);
  } finally {
    process.exit(0);
  }
};

testCompany();