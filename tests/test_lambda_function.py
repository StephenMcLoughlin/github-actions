import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.lambda_function import add


def test_add():
    assert add(2,2) == 4
    assert add(2,5) == 7





