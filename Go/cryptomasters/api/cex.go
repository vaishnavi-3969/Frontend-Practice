package api

import (
	"encoding/json"
	"fmt"
	"go/cryptomasters/datatypes"
	"io"
	"net/http"
	"strings"
)

func GetRate(currency string) (*datatypes.Rate, error) {
    upCurrency := strings.ToUpper(currency)
    res, err := http.Get(fmt.Sprintf("https://cex.io/api/ticker/%s/USD", upCurrency))
    if err != nil {
        return nil, err
    }
    if res.StatusCode != http.StatusOK {
        return nil, fmt.Errorf("status code received: %v", res.StatusCode)
    }
    bodyBytes, err := io.ReadAll(res.Body)
    if err != nil {
        return nil, err
    }
    var rate datatypes.Rate
    err = json.Unmarshal(bodyBytes, &rate)
    if err != nil {
        return nil, err
    }
    return &rate, nil
}
