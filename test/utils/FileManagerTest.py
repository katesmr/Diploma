import unittest
from src.utils.FileManager import FileManager


class FileManagerTest(unittest.TestCase):
    def setUp(self):
        self.manager = FileManager()

    def test_is_valid_file_path(self):
        self.assertTrue(self.manager.is_valid_file_path("./__init__.py"))
        self.assertFalse(self.manager.is_valid_file_path("../utils"))

    def test_is_valid_folder_path(self):
        self.assertTrue(self.manager.is_valid_folder_path("../"))
        self.assertFalse(self.manager.is_valid_folder_path("./__init__.py"))

    def test_get_file_name_folder(self):
        self.assertEqual(self.manager.get_file_name_folder("./"), ["./__init__.py", "./FileManagerTest.py"])

    def test_create_folder(self):
        self.assertRaises(FileExistsError, self.manager.create_folder, "../utils")


if __name__ == "__main__":
    unittest.main()
